module.exports = async function () {
  console.log('enter dapp init')
 
// app.registerContract(2000,'erc721.balanceOf')
// app.registerContract(2001,'erc721.mint')
// app.registerContract(2002,'erc721.transferFrom')
// app.registerContract(2003,'erc721.transfer')
// app.registerContract(2004,'erc721.approve')
// app.registerContract(2005,'erc721.allowance')
// app.registerContract(2006,'erc721.burn')
// app.registerContract(2007,'erc721.fields')


// app.registerFee(2000,'0','BEL')
// app.registerFee(2001,'0','BEL')
// app.registerFee(2002,'0','BEL')
// app.registerFee(2003,'0','BEL')
// app.registerFee(2004,'0','BEL')
// app.registerFee(2005,'0','BEL')
// app.registerFee(2006,'0','BEL')
// app.registerFee(2007,'0','BEL')


app.registerContract(4000,'own.transferFrom')
app.registerContract(4012,'own.transfer')
app.registerContract(4001,'own.approve')
app.registerContract(4002,'own.withdrawFromDAppAddress')
app.registerContract(4003,'own.mint')
app.registerContract(4004,'own.burn')
app.registerContract(4005,'own.burnFrom')
app.registerContract(4006,'own.generateOneTimeDappAddress')
app.registerContract(4007,'own.createBalTable')
app.registerContract(4011,'own.createBalTable1')
app.registerContract(4008,'own.allowance')
app.registerContract(4009,'own.balanceOf')
app.registerContract(4010,'own.spendAllowance')
app.registerContract(4013,'own.allowance')

app.registerFee(4000,'0','BEL')
app.registerFee(4001,'0','BEL')
app.registerFee(4002,'0','BEL')
app.registerFee(4003,'0','BEL')
app.registerFee(4004,'0','BEL')
app.registerFee(4005,'0','BEL')
app.registerFee(4006,'0','BEL')
app.registerFee(4007,'0','BEL')
app.registerFee(4008,'0','BEL')
app.registerFee(4009,'0','BEL')
app.registerFee(4010,'0','BEL')
app.registerFee(4011,'0','BEL')
app.registerFee(4012,'0','BEL')
app.registerFee(4013,'0','BEL')





  app.events.on('newBlock', (block) => {
    console.log('new block received', block.height)
  })
}