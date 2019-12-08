// @flow

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { ContactMethod } from '../../../../common/types'

const FooterContactMethod = ({ icon, content }: ContactMethod) => (
  <div>
    <FontAwesomeIcon icon={icon} size='lg' />&nbsp;
    <span>
      {content}
    </span>
  </div>
)

export default FooterContactMethod
