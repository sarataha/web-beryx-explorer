import { MuiDataGridProLicense } from '@/config/config'

import {
  actorTypeColumnPro,
  amountColumnPro,
  beryxLinkColumnPro,
  booleanColumnPro,
  boxColumnPro,
  codeViewColumnPro,
  compilerColumnPro,
  downloadColumnPro,
  downloadIpfsPro,
  licenseColumnPro,
  mempoolTransactionStatusColumnPro,
  methodTypeColumnPro,
  minerColumnPro,
  numberColumnPro,
  optimizationColumnPro,
  percentageRangePro,
  rankColumnPro,
  stringColumnPro,
  timeColumnPro,
  timeSinceColumnPro,
  transactionDetailsColumnPro,
  transactionStatusColumnPro,
  transactionTypeColumnPro,
  treeColumnPro,
} from './pro/columnDefinitions'
import {
  actorTypeColumn,
  amountColumn,
  beryxLinkColumn,
  booleanColumn,
  boxColumn,
  codeViewColumn,
  compilerColumn,
  downloadColumn,
  downloadIpfs,
  licenseColumn,
  mempoolTransactionStatusColumn,
  methodTypeColumn,
  minerColumn,
  numberColumn,
  optimizationColumn,
  percentageRange,
  rankColumn,
  stringColumn,
  timeColumn,
  timeSinceColumn,
  transactionDetailsColumn,
  transactionStatusColumn,
  transactionTypeColumn,
  treeColumn,
} from './standard/columnDefinitions'

/**
 * Conditional export of column definitions based on the MuiDataGridProLicense.
 * If MuiDataGridProLicense is false, it exports the standard column definitions;
 * otherwise, it exports the professional (Pro) column definitions.
 */
export default !MuiDataGridProLicense
  ? {
      treeColumn,
      actorTypeColumn,
      amountColumn,
      beryxLinkColumn,
      booleanColumn,
      boxColumn,
      codeViewColumn,
      compilerColumn,
      downloadColumn,
      downloadIpfs,
      licenseColumn,
      mempoolTransactionStatusColumn,
      methodTypeColumn,
      minerColumn,
      numberColumn,
      optimizationColumn,
      percentageRange,
      rankColumn,
      stringColumn,
      timeColumn,
      timeSinceColumn,
      transactionDetailsColumn,
      transactionStatusColumn,
      transactionTypeColumn,
    }
  : {
      treeColumn: treeColumnPro,
      actorTypeColumn: actorTypeColumnPro,
      amountColumn: amountColumnPro,
      beryxLinkColumn: beryxLinkColumnPro,
      booleanColumn: booleanColumnPro,
      boxColumn: boxColumnPro,
      codeViewColumn: codeViewColumnPro,
      compilerColumn: compilerColumnPro,
      downloadColumn: downloadColumnPro,
      downloadIpfs: downloadIpfsPro,
      licenseColumn: licenseColumnPro,
      mempoolTransactionStatusColumn: mempoolTransactionStatusColumnPro,
      methodTypeColumn: methodTypeColumnPro,
      minerColumn: minerColumnPro,
      numberColumn: numberColumnPro,
      optimizationColumn: optimizationColumnPro,
      percentageRange: percentageRangePro,
      rankColumn: rankColumnPro,
      stringColumn: stringColumnPro,
      timeColumn: timeColumnPro,
      timeSinceColumn: timeSinceColumnPro,
      transactionDetailsColumn: transactionDetailsColumnPro,
      transactionStatusColumn: transactionStatusColumnPro,
      transactionTypeColumn: transactionTypeColumnPro,
    }