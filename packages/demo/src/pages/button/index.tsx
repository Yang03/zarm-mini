import { View } from '@tarojs/components';
import { Button, Panel } from 'zarm-mini';

import './index.scss'


function ButtonDemo() {
  return (
   <View className='page-main'>
     <Panel
       title='基本用法'
     >
       <Button>default</Button>
       <Button theme='primary'>primary</Button>
     </Panel>
     <Panel
       title='块级按钮'
     >
       <Button block>default</Button>
       <Button block disabled>
         default disabled
       </Button>
       <Button block theme='primary'>
         primary
       </Button>
       <Button block disabled theme='primary'>
         primary disabled
       </Button>
     </Panel>
     <Panel
       title='按钮主题'
     >
       <Button>default</Button>
       <Button theme='primary'>primary</Button>
       <Button theme='danger'>danger</Button>
     </Panel>
     <Panel
       title='按钮尺寸'
     >
       <Button size='lg'>lg</Button>
       <Button>md</Button>
       <Button size='sm'>sm</Button>
       <Button size='xs'>xs</Button>
     </Panel>
     <Panel
       title='按钮形状'
     >
       <Button shape='rect' theme='primary'>
         rect
       </Button>
       <Button theme='primary'>radius</Button>
       <Button shape='round' theme='primary'>
         round
       </Button>
       <Button shape='circle' theme='primary'>
         circle
       </Button>
     </Panel>
     <Panel
       title='带阴影'
     >
       <Button shadow>default</Button>
       <Button shadow theme='primary'>
         primary
       </Button>
       <Button shadow theme='danger'>
         danger
       </Button>
     </Panel>
     <Panel
       title='幽灵按钮'
       className='bg-black'
     >
       <Button block ghost>
         default
       </Button>
       <Button block ghost theme='primary'>
         primary
       </Button>
       <Button block ghost theme='danger'>
         danger
       </Button>
       <Button block ghost disabled>
         disabled
       </Button>
     </Panel>
     {/* <Panel
       title='加载状态'
     >
       <Button loading>loading</Button>
       <Button loading theme='primary'>
         loading
       </Button>
       <Button loading disabled theme='primary'>
         disabled
       </Button>
     </Panel> */}
   </View>
  )
 }

 export default ButtonDemo;
