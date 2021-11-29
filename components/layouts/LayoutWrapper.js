import MainLayout from './MainLayout';
import MenuLayout from './MenuLayout';

const layouts = {
  main: MainLayout,
  menu: MenuLayout,
};

export default function LayoutWrapper(props) {
  const Layout = layouts[props.layout] || 'menu'
  
  if (Layout === 'menu') {
    return <MenuLayout {...props}>{props.children}</MenuLayout>;
  }
  return <MainLayout {...props}>{props.children}</MainLayout>;
}
