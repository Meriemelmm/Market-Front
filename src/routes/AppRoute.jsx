import { Routes, Route } from 'react-router-dom';
const RouteList = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Product" element={<About />} />
                <Route path="/Login" element={<login />} />
                <Route path="/Register" element={<r />} />
            </Routes>


        </>
    );
}

export default RouteList;
