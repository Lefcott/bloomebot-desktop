import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import LanguageSelector from '../../../../components/LanguageSelector';
import { SECTIONS } from '../../../../constants';
import { setSection } from '../../../../actions/section';
import useStyle from './style';
import getLang from './lang';

export default function Panel() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const lang = getLang(useSelector(({ language }) => language));
  const section = useSelector(({ section: _section }) => _section);

  return (
    <div className={classes.root}>
      <div className={classes.languageSelector}>
        <LanguageSelector />
      </div>
      {Object.values(SECTIONS).map((_section, i) => {
        const isSelected = _section === section;
        const selectedStyle = { backgroundColor: 'chartreuse', boxShadow: '0 0 3px 3px chartreuse' };
        return (
          <div
            className={classes.button}
            style={isSelected ? selectedStyle : {}}
            key={i + 1}
            onClick={() => dispatch(setSection(_section))}
          >
            {lang.sections[_section]}
          </div>
        );
      })}
    </div>
  );
}
