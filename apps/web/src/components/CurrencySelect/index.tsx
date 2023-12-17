import { useTranslation } from '@pancakeswap/localization'
import { ArrowDropDownIcon, Box, BoxProps, Button, useModal } from '@pancakeswap/uikit'
import { styled } from 'styled-components'
import { useAccount } from 'wagmi'

const DropDownHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.input};
  transition: border-radius 0.15s;
`

const DropDownContainer = styled(Button)`
  cursor: pointer;
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 16px;
  height: 40px;
  min-width: 136px;
  user-select: none;
  z-index: 20;

  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 168px;
  }

  .down-icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`

interface CurrencySelectProps extends BoxProps {
  hideBalance?: boolean
}

export const CurrencySelect = ({
  hideBalance,
  ...props
}: CurrencySelectProps) => {
  const { address: account } = useAccount()

  const { t } = useTranslation()

  const [onPresentCurrencyModal] = useModal(<></>)

  

  return (
    <Box width="100%" {...props}>
      <DropDownContainer p={0} onClick={onPresentCurrencyModal}>
        <ArrowDropDownIcon color="text" className="down-icon" />
      </DropDownContainer>
      
    </Box>
  )
}
