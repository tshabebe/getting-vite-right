import { Icon } from './components/Icon'
import { ProfileComponent } from './profileComponent'

import { useState } from 'react'

import { motion, AnimatePresence } from 'motion/react'

export function FloatingInviteBar() {
  const [isInviting, setIsInviting] = useState(false)
  const [inviteEmail, setInviteEmail] = useState('')

  const handleInviteClick = () => {
    setIsInviting(true)
  }

  const handleConfirmInvite = () => {
    setIsInviting(false)
    setInviteEmail('')
  }

  const handleCancelInvite = () => {
    setIsInviting(false)
    setInviteEmail('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCancelInvite()
    }
  }

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCancelInvite()
    }
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-4 left-4 right-4 bg-elevation-1/80 backdrop-blur-md max-w-md mx-auto px-4 py-2 rounded-2xl shadow-lg flex items-center justify-between"
      onClick={handleOutsideClick}
    >
      <div className="flex items-center gap-2">
        <AnimatePresence mode="wait">
          {!isInviting ? (
            <motion.button
              key="invite-button"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              onClick={handleInviteClick}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Icon name="UserPlus" className="stroke-green-foreground" />
              </motion.div>
              <span>Invite Friends</span>
            </motion.button>
          ) : (
            <motion.div
              key="invite-form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <motion.input
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                type="email"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="@username"
                className="bg-transparent border-none outline-none flex-1 min-w-0"
                autoFocus
              />
              <motion.button
                onClick={handleConfirmInvite}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Icon name="Check" className="stroke-green-foreground" />
              </motion.button>
              <motion.button
                onClick={handleCancelInvite}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Icon name="X" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        className="flex items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <ProfileComponent />
        </motion.div>
        <motion.span
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          test***4
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
