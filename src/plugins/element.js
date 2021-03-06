import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,//弹框提示组件
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox,
  Avatar,
  Link,
  TabPane,
  Tabs,
  Carousel,
  CarouselItem,
  Backtop,
  Footer,
  Divider,
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Avatar)
Vue.use(Link)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Backtop)
Vue.use(Footer)
Vue.use(Divider)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
