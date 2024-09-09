import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import TagItem from './TagItem'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeOptionId: '',
    tasksList: [],
    task: '',
    tag: tagsList[0].optionId,
  }

  onSubmitForm = () => {
    const {task, tag, tasksList} = this.state
    if (task.length !== 0) {
      this.setState({
        tasksList: [...tasksList, {id: uuidV4(), task, tag}],
        task: '',
        tag: tagsList[0].optionId,
      })
    }
  }

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  onChangeTag = event => {
    this.setState({tag: event.target.value})
  }

  changeTag = id => {
    const {activeOptionId} = this.state
    if (id === activeOptionId) {
      this.setState({activeOptionId: ''})
    } else {
      this.setState({activeOptionId: id})
    }
  }

  render() {
    const {tasksList, activeOptionId, task, tag} = this.state
    console.log(tasksList)
    console.log(activeOptionId)
    let filteredTasks
    if (activeOptionId === '') {
      filteredTasks = tasksList
    } else {
      filteredTasks = tasksList.filter(each => each.tag === activeOptionId)
    }
    return (
      <div className="bg">
        <div className="task-create-div">
          <h1 className="heading-yellow">Create a task!</h1>
          <form className="form" onSubmit={this.onSubmitForm}>
            <div className="task-div">
              <label htmlFor="task" className="label">
                Task
              </label>
              <input
                id="task"
                onChange={this.onChangeTask}
                placeholder="Enter the task here"
                className="input"
                value={task}
              />
            </div>
            <div className="tags-div">
              <label htmlFor="tags" className="label">
                Tags
              </label>
              <select
                id="tags"
                name="tags"
                value={tag}
                className="select input"
                onChange={this.onChangeTag}
              >
                {tagsList.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={this.onSubmitForm}
              type="button"
              className="submit-button"
            >
              Add Task
            </button>
          </form>
        </div>
        <div className="tags-tasks-div">
          <div className="tags-list-div">
            <h1 className="heading-white">Tags</h1>

            <ul className="tags-list">
              {tagsList.map(each => (
                <TagItem
                  key={each.optionId}
                  details={each}
                  changeTag={this.changeTag}
                  isActive={each.optionId === activeOptionId}
                />
              ))}
            </ul>
          </div>
          <div className="task-list-div">
            <h1 className="heading-white">Tasks</h1>

            {filteredTasks.length === 0 ? (
              <p className="empty">No Tasks Added Yet</p>
            ) : (
              <ul className="tasks-list">
                {filteredTasks.map(each => (
                  <li className="task-item">
                    <p className="task-test">{each.task}</p>
                    <button className="tag-button" type="button">
                      {each.tag}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
