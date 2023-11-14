import getRoutes from '../../routes';

const AppRouter = () => {
    const renderRoutes = () => {
        return getRoutes();
    };

    return <>{renderRoutes()}</>;
};

export default AppRouter;
