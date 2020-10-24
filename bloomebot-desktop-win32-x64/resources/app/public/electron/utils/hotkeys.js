import { globalShortcut } from 'electron';

const counters = {};
const pressTimeout = 350;

export const registerMany = (...registers) => {
  let registeredAccelerators = [];
  let success = true;

  for (let i = 0; i < registers.length; i += 3) {
    const accelerators = registers[i];
    const times = registers[i + 1];
    const callback = registers[i + 2];
    const wrappedCallback = () => {
      counters[accelerators] = counters[accelerators] || 0;
      counters[accelerators] += 1;
      setTimeout(() => (counters[accelerators] -= 1), pressTimeout);
      if (counters[accelerators] >= times) callback(accelerators);
    };
    const wasRegistered = globalShortcut.registerAll(accelerators, wrappedCallback);
    if (wasRegistered) registeredAccelerators.push(...accelerators);
    else {
      console.error(`Failed to register accelerators ${accelerators} with callback ${callback}`);
      success = false;
      break;
    }
  }
  registeredAccelerators = [...new Set(registeredAccelerators)];
  if (!success) registeredAccelerators.forEach(accelerator => globalShortcut.unregister(accelerator));
  return success;
};

export const wasPressedNTimes = (x, accelerator) => counters[accelerator] >= x;
