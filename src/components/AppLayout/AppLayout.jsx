import { Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";

export const AppLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <main>
        <Suspense fallback={<div>Loader</div>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </>
  );
};
