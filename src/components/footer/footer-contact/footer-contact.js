// @flow

import React, { useContext, Fragment } from 'react'

import FooterContactMethod from './footer-contact-method'

import DefaultContext from '../../../store/context'

import styles from './footer-contact.module.css'

const FooterContact = () => {
  const { state } = useContext(DefaultContext)
  const { contact } = state

  return (
    <div className={styles.contact}>
      {Object.keys(contact).map((contactMethod, index) =>
        <Fragment key={contactMethod}>
          <FooterContactMethod
            icon={contact[contactMethod].icon}
            content={contact[contactMethod].content}
          />
          {index < Object.keys(contact).length - 1
            ? <span className={styles.separator}>|</span>
            : null}
        </Fragment>)}
    </div>
  )
}

export default FooterContact
