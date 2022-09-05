import fs from 'fs-extra';
import path from 'path';
import { PKG_ROOT } from '../consts.js';

export const getVersion = () => {
    const packageJsonPath = path.join(PKG_ROOT, 'package.json');

    const packageJsonContent = fs.readJSONSync(packageJsonPath);

    return packageJsonContent.version ?? '1.0.0';
};
