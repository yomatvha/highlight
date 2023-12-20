import Popular from "./Popular"
import New from "./New"
import React from "react"

const changeStyle = (Component) => {
  return class ChangeStyle extends React.Component {
    render() {
      if (this.props.views >= 1000) {
        return (
          <Popular>
            <Component {...this.props} />
          </Popular>
        )
      }
      if (this.props.views < 100) {
        return (
          <New>
            <Component {...this.props} />
          </New>
        )
      }
      return (
        <Component {...this.props} />
      )
    }
  }
}

export default changeStyle
