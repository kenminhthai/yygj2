let columns = [
  {
    title: '文件类型',
    dataIndex: 'file_type',
  },
  {
    title: '文件',
    dataIndex: 'file',
    render:text => <a href="javascript:;">{text}</a>
  },
]
let data = [
  {
    key:'1',
    file_type:'企业营业执照',
    file:'0000.pdf',
  },
  {
    key:'2',
    file_type:'法人身份证正面',
    file:'0000.pdf',
  },
  {
    key:'3',
    file_type:'法人身份证反面',
    file:'0000.pdf',
  },
  {
    key:'4',
    file_type:'平台会员协议书',
    file:'0000.pdf',
  },
]
let FileList = {
  columns,
  data,
}
export default FileList
