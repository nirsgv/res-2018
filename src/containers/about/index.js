import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet';

const About = () => (
  <div>
      <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="ABOUT"
      >
          <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <h1>אודות</h1>
    <p>אודות</p>
  </div>
)

const mapStateToProps = state => ({
    count: state.counter.count,
    webm: state.player.defaultSrcWebm,
    fullState: state
})
debugger
const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)
