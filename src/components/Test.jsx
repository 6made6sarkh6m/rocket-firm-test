import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const Router = () => {
    return (
        <Router>
            <Header />
            <Switch>
            <Route path="/" component={Home} />
            <Route path="/home" component={HomePage} />
            </Switch>
        </Router>
    )
}