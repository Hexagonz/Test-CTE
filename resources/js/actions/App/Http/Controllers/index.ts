import SiswaController from './SiswaController'
import KelasController from './KelasController'
import GuruController from './GuruController'
import OrangTuaController from './OrangTuaController'
import Settings from './Settings'
const Controllers = {
    SiswaController: Object.assign(SiswaController, SiswaController),
KelasController: Object.assign(KelasController, KelasController),
GuruController: Object.assign(GuruController, GuruController),
OrangTuaController: Object.assign(OrangTuaController, OrangTuaController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers