import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useNotificationsStore } from '@/store/ui/notifications'
import { InspectData } from '@carbon/pictograms-react'
import { Box, Button, Unstable_Grid2 as Grid2 } from '@mui/material'

import NotificationBody from '../../../../../common/NotificationBody/NotificationBody'
import { NoRows } from '../../../../../widgets/Table'

/**
 * A React component that renders a popup displaying notifications.
 *
 * @returns A React element representing a notifications popup.
 */
const NotificationsPopup = () => {
  /**
   * Get notifications and the deleteAll function from the notifications store.
   */
  const { notifications, deleteAll } = useNotificationsStore()

  /**
   * Get the i18next translation function.
   */
  const { t } = useTranslation()

  const handleClearAll = useCallback(() => {
    deleteAll()
  }, [deleteAll])

  return (
    <Grid2
      container
      bgcolor="background.level0"
      sx={{
        position: 'relative',
        alignItems: 'flex-start',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        width: '26rem',
        minHeight: '10rem',
        maxHeight: 'calc(100dvh - 9rem)',
      }}
    >
      <Grid2
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        {notifications.length === 0 ? (
          <NoRows text={''} title={"You don't have any notifications yet"} icon={<InspectData />} />
        ) : (
          <>
            <Grid2
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                id={'clear-all-notification'}
                onClick={handleClearAll}
                variant="inputType"
                size="small"
                sx={{
                  textTransform: 'capitalize',
                  padding: '0.76rem 0.9rem 0.76rem 0.9rem',
                }}
              >
                {t('Clear All')}
              </Button>
            </Grid2>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                overflowY: 'scroll',
                width: '100%',
                height: '100%',
                maxHeight: 'calc(100dvh - 15rem)',
              }}
            >
              {notifications.map(notification => (
                <NotificationBody notification={notification} isFromStore key={notification.id} shadow={false} />
              ))}
            </Box>
          </>
        )}
      </Grid2>
    </Grid2>
  )
}

export default NotificationsPopup
