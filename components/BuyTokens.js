import React, { useContext } from 'react'
import { RobinhoodContext } from '../context/RobinhoodContext'

const styles = {
  inputAmount: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white`,
  formContainer: `flex items-center`,
  select: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white`,
  options: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white`,
  noticeCTA: 'font-bold text-green-500 cursor-pointer mt-5',
}

const BuyTokens = () => {
  const {
    isAuthenticated,
    setAmount,
    mint,
    setCoinSelect,
    coinSelect,
    amount,
    toCoin,
    setToCoin,
  } = useContext(RobinhoodContext)
  return (
    <form className={styles.formContainer}>
      <div className='flex h-full w-full flex-col items-center'>
        <select
          className={styles.select}
          value={coinSelect}
          onChange={e => setCoinSelect(e.target.value)}
        >
          <option className={styles.options} value='ETH'>
            ETH
          </option>
          <option className={styles.options} value='DOGE'>
            DOGE
          </option>
          <option className={styles.options} value='USDC'>
            USDC
          </option>
          <option className={styles.options} value='LINK'>
            LINK
          </option>
          <option className={styles.options} value='DAI'>
            DAI
          </option>
        </select>
        <select
          className={styles.select}
          value={toCoin}
          onChange={e => setToCoin(e.target.value)}
        >
          <option className={styles.options} value='DOGE'>
            DOGE
          </option>
          <option className={styles.options} value='USDC'>
            USDC
          </option>
          <option className={styles.options} value='LINK'>
            LINK
          </option>
          <option className={styles.options} value='DAI'>
            DAI
          </option>
        </select>
        <input
          placeholder='Amount...'
          className={styles.inputAmount}
          type='text'
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <button
          className={styles.noticeCTA}
          type='button'
          disabled={!isAuthenticated}
          onClick={() => mint()}
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default BuyTokens
