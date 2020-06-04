import React from 'react'
import assert from 'assert'
import { mount } from 'enzyme'
import sinon from 'sinon'
import * as i18nHook from '../../../../hooks/useI18nContext'
import TransactionStatus from '../transaction-status.component'
import Tooltip from '../../../ui/tooltip-v2'

describe('TransactionStatus Component', function () {
  before(function () {
    sinon.stub(i18nHook, 'useI18nContext').returns((str) => str.toUpperCase())
  })

  it('should render CONFIRMED properly', function () {
    const wrapper = mount(
      <TransactionStatus
        statusKey="confirmed"
        date="June 1"
      />
    )

    assert.ok(wrapper)
    assert.ok(wrapper.find('.transaction-status--confirmed').length, 'confirmed className not found')
    assert.equal(wrapper.text(), 'June 1 · ')
  })

  it('should render APPROVED properly', function () {
    const wrapper = mount(
      <TransactionStatus
        statusKey="approved"
        tooltipText="test-title"
      />
    )

    assert.ok(wrapper)
    assert.equal(wrapper.text(), 'APPROVED · ')
    assert.ok(wrapper.find('.transaction-status--approved').length, 'approved className not found')
    assert.equal(wrapper.find(Tooltip).props().title, 'test-title')
  })

  it('should render SUBMITTED properly', function () {
    const wrapper = mount(
      <TransactionStatus
        date="June 1"
        statusKey="submitted"
      />
    )

    assert.ok(wrapper)
    assert.ok(wrapper.find('.transaction-status--submitted').length, 'submitted className not found')
    assert.equal(wrapper.text(), 'PENDING · ')
  })

  it('should render QUEUED properly', function () {
    const wrapper = mount(
      <TransactionStatus
        statusKey="queued"
      />
    )

    assert.ok(wrapper)
    assert.ok(wrapper.find('.transaction-status--queued').length, 'queued className not found')
    assert.equal(wrapper.text(), 'QUEUED · ')
  })

  it('should render UNAPPROVED properly', function () {
    const wrapper = mount(
      <TransactionStatus
        statusKey="unapproved"
      />
    )

    assert.ok(wrapper)
    assert.ok(wrapper.find('.transaction-status--unapproved').length, 'unapproved className not found')
    assert.equal(wrapper.text(), 'UNAPPROVED · ')
  })

  after(function () {
    sinon.restore()
  })
})
