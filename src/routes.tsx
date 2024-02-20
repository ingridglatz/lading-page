import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from './pages/Home';
import { Destiny } from './pages/Destiny';
import { City } from './pages/City';
import { Exercises } from './pages/Exercises/Exercises';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/destiny" element={<Destiny />} />
      <Route path="/city" element={<City />} />
      <Route path="/exercises" element={<Exercises />} />
    </Route>,
  ),
);
