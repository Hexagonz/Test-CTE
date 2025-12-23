import SiswaController from './SiswaController'
import KelasController from './KelasController'
import GuruController from './GuruController'
import Settings from './Settings'
const Controllers = {
    SiswaController: Object.assign(SiswaController, SiswaController),
KelasController: Object.assign(KelasController, KelasController),
GuruController: Object.assign(GuruController, GuruController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers