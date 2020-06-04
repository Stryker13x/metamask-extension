import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Tooltip from '../../ui/tooltip-v2'

import {
  UNAPPROVED_STATUS,
  REJECTED_STATUS,
  APPROVED_STATUS,
  SIGNED_STATUS,
  SUBMITTED_STATUS,
  CONFIRMED_STATUS,
  FAILED_STATUS,
  DROPPED_STATUS,
  CANCELLED_STATUS,
} from '../../../helpers/constants/transactions'
import { useI18nContext } from '../../../hooks/useI18nContext'

const statusToClassNameHash = {
  [UNAPPROVED_STATUS]: 'transaction-status--unapproved',
  [REJECTED_STATUS]: 'transaction-status--rejected', // Not used?
  [APPROVED_STATUS]: 'transaction-status--approved', // Not used?
  [SIGNED_STATUS]: 'transaction-status--signed', // Not used?
  [SUBMITTED_STATUS]: 'transaction-status--submitted', // Not used?
  [CONFIRMED_STATUS]: 'transaction-status--confirmed', // Not used?
  [FAILED_STATUS]: 'transaction-status--failed',
  [DROPPED_STATUS]: 'transaction-status--dropped', // Not cared for
  [CANCELLED_STATUS]: 'transaction-status--cancelled',
  queued: 'transaction-status--queued',
}

const statusToTextHash = {
  [SUBMITTED_STATUS]: 'pending',
}

export default function TransactionStatusTwo ({ statusKey, date, tooltipText, className }) {
  const t = useI18nContext()
  const statusText = statusKey === CONFIRMED_STATUS ? date : t(statusToTextHash[statusKey] || statusKey)

  return (
    <span>
      <Tooltip
        position="top"
        title={tooltipText}
        wrapperClassName={classnames('transaction-status', className, statusToClassNameHash[statusKey])}
      >
        {statusText }
      </Tooltip>
      {' '}·{' '}
    </span>
  )
}

TransactionStatusTwo.propTypes = {
  statusKey: PropTypes.string,
  className: PropTypes.string,
  date: PropTypes.string,
  tooltipText: PropTypes.string,
}
