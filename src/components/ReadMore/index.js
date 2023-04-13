// Write your code here
import {useState} from 'react'
import {
  MainCon,
  HeadingCon,
  ParaCont,
  ImageCon,
  ButtonCon,
  ParaOne,
} from './styledComponents'

const ReadMore = ({reactHooksDescription}) => {
  const [setting, settingUser] = useState(false)

  const paraChange = setting
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const buttonText = setting ? 'read less' : 'read more'

  const onClickChange = () => {
    settingUser(prevState => !prevState)
  }

  return (
    <MainCon>
      <HeadingCon>React Hooks</HeadingCon>
      <ParaCont>Hooks are a new addition to React</ParaCont>
      <ImageCon
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ParaOne>{paraChange}</ParaOne>
      <ButtonCon onClick={onClickChange} type="button">
        {buttonText}
      </ButtonCon>
    </MainCon>
  )
}
export default ReadMore
