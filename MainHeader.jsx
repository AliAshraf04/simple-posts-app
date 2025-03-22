import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Ali's Poster
      </h1>
      <p>
        <button className={classes.button} onClick={props.onCreatePost}>
          <MdPostAdd size={18} />
          Add Post Here
        </button>
      </p>
    </header>
  );
}

export default MainHeader;