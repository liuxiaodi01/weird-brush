export interface FlowNode {
  id: string;
  name: string;
  type: string;
  open?: boolean;
  icon: string;
}
export interface FlowData {
  nodeList: any[];
  lineList: any[];
  name?: string;
}
export interface ActiveElement {
  type?: string;
  from?: string;
  to?: string;
  label?: string;
  sourceId?: string;
  targetId?: string;
  nodeId?: string;
}
