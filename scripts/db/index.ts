/// <reference types="websql" />

const initSQL = [
`CREATE TABLE IF NOT EXISTS watch_dir (
	id unique,
	path,
	is_check_subdir
)`,
`CREATE TABLE IF NOT EXISTS item (
	id unique,
	watch_dir,
	path,
	type,
	score,
	thumb,
	creator,
	performer,
	series
)`,
`CREATE TABLE IF NOT EXISTS item_tag (
	id unique,
	item_id,
	name
)`,
`CREATE TABLE IF NOT EXISTS color (
	id unique,
	name,
	color
)`,
`CREATE TABLE IF NOT EXISTS keymap (
	id unique,
	key,
	command
)`,
];

class DB {
	constructor() {
		try {
			const db: Database = window.openDatabase(
				'vcpod',
				'1.0',
				'vcpod database',
				10 * 1024 * 1024
			);

			db.transaction((tx: SQLTransaction) => {
				for (const i in initSQL) {
					tx.executeSql(initSQL[i]);
				}
			});
		} catch (e) {
			if (e instanceof ReferenceError) {
				// Web SQL Database に非対応
			} else {
				console.error(e);
			}
		}
	}
}
