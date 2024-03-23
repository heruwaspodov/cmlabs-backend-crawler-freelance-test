import * as fs from "fs-extra";

export const processDirectory = async (directoryPath: string): Promise<void> => {
    await deleteContentAndDir(directoryPath)
    await makeDir(directoryPath)
}

export const deleteContentAndDir = async (directoryPath: string): Promise<void> => {
    await fs.remove(directoryPath)
}

export const makeDir = async (directoryPath: string): Promise<void> => {
    await fs.mkdir(directoryPath)
}

export const writeContent = async (directoryPath: string, content: string): Promise<void> => {
    await fs.writeFileSync(directoryPath, content);
}