import { client } from '../../lib/sanityClient'

const swapTokens = async (req, res) => {
  try {
    const txDoc = {
      _type: 'transactions',
      _id: req.body.txHash,
      txHash: req.body.txHash,
      fromAddress: req.body.from,
      toAddress: req.body.to,
      amount: req.body.amount,
      timestamp: new Date(Date.now()).toISOString(),
    }

    await client.createIfNotExists(txDoc)

    res.status(201).send({ message: 'success' })
    console.log('swapTokens success')
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default swapTokens
