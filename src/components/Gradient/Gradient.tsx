import * as React from 'react';

import Icon from '../Icons/Icon';

import styles from './Gradient.module.css';

/**
 *
 * @returns {JSX.Element}
 * @description
 * Import the GradientFill SVG component to gain access to the grain effect through the 'grainy' id.
 * Once imported, 'grainy' can be passed as a value to a filter() css property within
 * Gradient.module.css.
 *
 * GradientFill does not appear on the page, it's appearance is 'none',
 * It is imported to provide 'overlay-two' access to its 'grainy' filter, defined as ID 'grainy'.
 *
 * 'underlay', 'overlay-two', and 'header-underlay' are all fixed to the page.
 * They are all void of any content/targets, and are solely for decoration.
 *
 * 'underlay' is positioned under the header using the headers z-index - 100,
 *  and the same width/height as the header.
 *  It provides the gradient effect that is constant for both themes and all pages.
 *
 * 'overlay-two' is fixed to fit the entire screen, and has the highest z-index of any elemnent.
 * - It calls filter('grainy') to apply the grain effect to the entire page.
 *
 * 'header-underlay' rests one z-index above the 'underlay' div, still below the header.
 * - It provides a linear black gradient to the header to make the header content more readable.
 *
 */
export default function Gradient() {
  return (
    <aside className={styles.wrappeer}>
      <Icon title='GradientFill' className={styles.svg} />
      <div className={styles.underlay} />
      <div className={styles['overlay-two']} />
      <div className={styles['header-underlay']} />
    </aside>
  );
}
