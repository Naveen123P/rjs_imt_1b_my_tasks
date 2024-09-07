import {Button} from './styledComponent'
import './index.css'

const TagItem = props => {
  const {details, changeTag, isActive} = props
  const {optionId, displayText} = details
  const onChangeTag = () => {
    changeTag(optionId)
  }
  return (
    <li className="tag-item">
      <Button isActive={isActive} type="button" onClick={onChangeTag}>
        {displayText}
      </Button>
    </li>
  )
}

export default TagItem
