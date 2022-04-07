import { Home, Partner, ThePlace } from './pages';
import * as templates from './event';
import { Routes, Route } from 'react-router-dom';

const Routing = (
  <Routes>
    <Route path="" element={<Home template={templates.Home} />} />
    <Route path="/thewedding">
      <Route
        path="/thewedding/anthony"
        element={<Partner template={templates.Partners[0]} />}
      />
      <Route
        path="/thewedding/melissa"
        element={<Partner template={templates.Partners[1]} />}
      />
    </Route>
    <Route
      path="/thewedding/theplace"
      element={<ThePlace template={templates.ThePlace} />}
    />
  </Routes>
);

export default Routing;
