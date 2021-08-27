

import Card from '../common/card';
import Drawer from '../navigations/drawer';
import Appbar from '../navigations/appbar';
import Mobile from '../navigations/mobile';
import Title from '../common/title';
import Slide from '../slider/slider'
import Trending from '../common/trending';
function App() {
    return (

        <div className='w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-4 '>
            <div className='col-span-3'>
                <Title title='Popularity' />
            </div>
            <div className='col-span-2 w-full items-center justify-center flex flex-col p-4'>
                <Card />
                <Card />
                <Card />
            </div>
            <div className='hidden lg:block'>
                <Trending />
            </div>
        </div>

    );
}

export default App;
