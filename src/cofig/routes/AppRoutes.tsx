
import { Route, Routes } from 'react-router-dom'
import { MainTaskPage } from '../../task/pages/MainTaskPage'
import { NotFoundPage } from '../../shared/pages/NotFoundPage'
import { MainProfilePage } from '../../profile/pages/MainProfilePage'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainTaskPage/>}/>
            <Route path='task'>
                <Route index element={<MainTaskPage></MainTaskPage>}/>
            </Route>
            <Route path='profile' element={<MainProfilePage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    )
}
