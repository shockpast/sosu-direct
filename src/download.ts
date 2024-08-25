import { exec } from "node:child_process"

import regedit from "regedit"

// Initial Values
const arg = process.argv[2]
const id = /sosu:\/\/(.[0-9]+)/gi.exec(arg)?.pop()

// Registry
let OSU_PATH: string = ""
regedit.list(["HKCR\\osu\\shell\\open\\command"], async (_, res) => {
  OSU_PATH = (res["HKCR\\osu\\shell\\open\\command"].values[""].value as string).replace(" \"%1\"", "")
})

const file = await fetch(`https://direct.osuokayu.moe/api/v1/d/${id}`)
await Bun.write(`${import.meta.dir}/../songs/${id}.osz`, file)
exec(`${OSU_PATH} ${import.meta.dir}/../songs/${id}.osz`)