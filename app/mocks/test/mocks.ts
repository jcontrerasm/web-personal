import { ProccessDetailModel, ProccessLogModel } from '@interfaces/models/reportProccesModel'

export const mockDetail: ProccessDetailModel[] = [{
    id:'123',
    proccessId: 'vrewvewvbrev',
    referenceId: '123456',
    request: 'Terminado',
    response: '800',
    log: 'producto not available',
    creationDate: '18/08/2022',
    creationUser: 'admin',
    updateDate: '18/08/2022',
    updateUser: 'admin'
  },
  {
    id:'363',
    proccessId: 'vrewvewvbrev',
    referenceId: '123456',
    request: 'Terminado',
    response: '800',
    log: 'producto not available',
    creationDate: '18/08/2022',
    creationUser: 'admin',
    updateDate: '18/08/2022',
    updateUser: 'admin'
  },
  {
    id:'275',
    proccessId: 'vrewvewvbrev',
    referenceId: '123456',
    request: 'Terminado',
    response: '800',
    log: 'producto not available',
    creationDate: '18/08/2022',
    creationUser: 'admin',
    updateDate: '18/08/2022',
    updateUser: 'admin'
  }]

export const mockLog: ProccessLogModel[] = [{
    proccessId: 'fwsfewfew',
    creationDate: 'efwfewf',
    log: 'wvgerwfwef'
  },
  {
    proccessId: 'csa',
    creationDate: 'efwfewf',
    log: 'wvgerwfwef'
  },
  {
    proccessId: 'ffefe',
    creationDate: 'efwfewf',
    log: 'wvgerwfwef'
  },
  {
    proccessId: 'fefeahn',
    creationDate: 'efwfewf',
    log: 'wvgerwfwef'
  }]

export  const mockReportProccess = [{
    id: '1',
    procces: 'Pim sync',
    user: 'leslie',
    date: '19/08/2022',
    state: 'Terminado',
    quantityTotal: '800',
    quantityProcced: '800',
    creationDate: '19/08/2022',
    creationUser: 'admin',
    updateDate: '19/08/2022',
    updateUser: 'admin',
  },
  {
    id: '2',
    procces: 'Catalog sync',
    user: 'avendano',
    date: '19/08/2022',
    state: 'En progreso',
    quantityTotal: '800',
    quantityProcced: '800',
    creationDate: '19/08/2022',
    creationUser: 'admin',
    updateDate: '19/08/2022',
    updateUser: 'admin',
  },
  {
    id: '3',
    procces: 'Pim sync',
    user: 'leslie',
    date: '19/08/2022',
    state: 'Terminado',
    quantityTotal: '800',
    quantityProcced: '700',
    creationDate: '19/08/2022',
    creationUser: 'admin',
    updateDate: '19/08/2022',
    updateUser: 'admin',
  }
]

export  const mockHistory = [
  {
    id: '1',
    processed_count: 'fdfs',
    log: 'fdfds',
    state: 'rewr',
    creation_date: '20-10-2022',
    creation_user: 'Admin',
    update_date: '20-10-2022',
    update_user: 'Admin'
  },
  { 
    id: '2',
    processed_count: 'fdfs',
    log: 'fdfds',
    state: 'rewr',
    creation_date: '20-10-2022',
    creation_user: 'Admin',
    update_date: '20-10-2022',
    update_user: 'Admin'
  }
]

export  const mockBlackList = [
  {
    id: '1',
    sku: 'fdfs',
    category_id: 'fdfds',
    category_limit: 'rewr',
    base_price: '20',
    price_discount: '5',
    price_toh: '15',
    creation_date: '20-10-2022',
    creation_user: 'Admin',
    update_date: '20-10-2022',
    update_user: 'Admin'
  }  
]

export  const mockMippAlerts = [
  {
    date: '20/10/2022 10:00',
    category: '/123/',
    detail: 'Padre/123/ => 2800 registros, Hijo /123/111/ => 1000skus, Hijo /123/222/ => 1200skus, faltan => 1600skus',
    type: 'Suma nodos distintos a la del padre'    
  },
  {
    date: '20/10/2022 10:00',
    category: '/123/456/789/',
    detail: 'Nodo final con 2800 skus (tope maximo 2500)',
    type: 'Nodo final con mas de 2500 sku'
  }  
]
