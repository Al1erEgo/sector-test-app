import { styled } from 'styled-components'

export const FlexContainer = styled.div<{
  alignitems?: string
  justifycontent?: string
  flexdirection?: string
  margin?: string
  padding?: string
  width?: string
  gap?: string
}>`
  width: ${props => props.width || '100%'};
  display: flex;
  align-items: ${props => props.alignitems || 'center'};
  flex-direction: ${props => props.flexdirection || 'row'};
  justify-content: ${props => props.justifycontent || 'center'};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
  gap: ${props => props.gap || '0px'};

  @media screen and (max-width: 500px) {
    flex-direction: ${props => props.flexdirection || 'column'};
    align-items: center;
  }
`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  height: 100%;
  max-height: 100%;
`

export const PageContentContainer = styled.div`
  max-height: calc(100% - 50px);
  height: calc(100% - 50px);
  min-height: 200px;
  overflow: auto;
  position: relative;
`

export const FullParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-height: 100%;
  min-width: 100%;
`
