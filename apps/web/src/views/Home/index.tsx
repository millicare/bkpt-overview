import { useTranslation } from '@pancakeswap/localization'
import { Box, PageSection, useMatchBreakpoints } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import { styled } from 'styled-components'
import Overview from 'views/Info/Overview'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`
const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px', padding: '0px 16px' }
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  return (
    <Box style={{ width: isMobile ? '100vw' : 'calc(100vw - 8px)', overflow: 'hidden', boxSizing: 'border-box' }}>
      <style jsx global>
        {`
          #home-1 .page-bg {
            background: linear-gradient(139.73deg, #e6fdff 0%, #f3efff 100%);
          }
          [data-theme='dark'] #home-1 .page-bg {
            background: radial-gradient(103.12% 50% at 50% 50%, #21193a 0%, #191326 100%);
          }
          #home-2 .page-bg {
            background: linear-gradient(180deg, #ffffff 22%, #d7caec 100%);
          }
          [data-theme='dark'] #home-2 .page-bg {
            background: linear-gradient(180deg, #09070c 22%, #201335 100%);
          }
          #home-3 .page-bg {
            background: linear-gradient(180deg, #6fb6f1 0%, #eaf2f6 100%);
          }
          [data-theme='dark'] #home-3 .page-bg {
            background: linear-gradient(180deg, #0b4576 0%, #091115 100%);
          }
          #home-4 .inner-wedge svg {
            fill: #d8cbed;
          }
          [data-theme='dark'] #home-4 .inner-wedge svg {
            fill: #201335;
          }

          #bottom-wedge4-2 svg {
            fill: #72b8f2;
          }
          [data-theme='dark'] #bottom-wedge4-2 svg {
            fill: #0b4576;
          }
        `}
      </style>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        containerProps={{
          id: 'home-overview',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <Overview/>
      </PageSection>
    </Box>
  )
}

export default Home
