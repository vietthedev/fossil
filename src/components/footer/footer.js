// @flow

import React from 'react'

import FooterContact from './footer-contact'
import FooterCopyright from './footer-copyright'

import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.pageFooter}>
    <FooterContact />
    <FooterCopyright />
  </footer>
)

export default Footer
