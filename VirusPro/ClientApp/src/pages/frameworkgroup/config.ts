import i18n from "@/lang";
// 页面中，需要展示的动作按钮；增，改，删，导入，导出
export const ASSEMBLIES: Array<string> = [
  "add",
  "edit",
  "delete",
  "export",
  "imported"
];

export const TABLE_HEADER: Array<object> = [
  {
    key: "GroupCode",
    sortable: true,
    label: i18n.t(`frameworkgroup.GroupCode`)
  },
  {
    key: "GroupName",
    sortable: true,
    label: i18n.t(`frameworkgroup.GroupName`)
  },
  {
    key: "ManagerName",
    sortable: true,
    label: i18n.t(`frameworkgroup.Manager`)
  },
  {
    isOperate: true,
    label: i18n.t(`table.actions`),
    actions: ["detail", "edit", "deleted"]
  } //操作列
];
