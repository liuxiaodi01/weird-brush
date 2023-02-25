<script lang="tsx">
import { h, type PropType } from "vue";
import { useRouter, type RouteRecordRaw } from "vue-router";

export default {
  props: {
    menu: {
      type: Array as PropType<RouteRecordRaw[]>,
      required: true,
    },
    mode: {
      type: String,
      default: "inline",
    },
    collapsed: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const route = useRouter();
    const render = () => {
      return (
        <a-menu
          forceSubMenuRender={true}
          inlineIndent={10}
          mode={props.mode}
          openKeys={["/" + route.currentRoute.value.path.split("/")[1]]}
          selectedKeys={[route.currentRoute.value.path]}
        >
          {renderMenuItem(props.menu)}
        </a-menu>
      );
    };
    const renderMenuItem = (menu: RouteRecordRaw[], path?: string) => {
      return menu.map((item: any) => {
        if (item.children && item.children.length > 0) {
          return (
            <a-sub-menu
              title={item.meta.name}
              key={item.path}
              v-slots={{
                icon: () => IconRender(item.meta.icon),
                expandIcon: (row: any) => expanIcon(row),
              }}
            >
              {renderMenuItem(item.children, item.path)}
            </a-sub-menu>
          );
        } else {
          return (
            <a-menu-item
              disabled={item.meta.disable}
              key={path ? `${path}/${item.path}` : item.path}
              v-slots={{
                icon: () => IconRender(item.meta.icon),
              }}
              onClick={() =>
                route.push(path ? `${path}/${item.path}` : item.path)
              }
            >
              {item.meta.name}
            </a-menu-item>
          );
        }
      });
    };
    const IconRender = (name: string) => {
      return h("i", { class: `${name}` }, { default: () => "" });
    };
    const expanIcon = ({ isOpen }: any) => {
      if (isOpen) {
        return h(
          "i",
          { class: `iconfont icon-shangjiantou` },
          { default: () => "" }
        );
      } else {
        return h(
          "i",
          { class: `iconfont icon-xiajiantou` },
          { default: () => "" }
        );
      }
    };
    return () => [render()];
  },
};
</script>

<style scoped>
.icon-shangjiantou,
.icon-xiajiantou {
  font-size: 14px !important;
}
</style>
