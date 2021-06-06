import { XpColumnComponent } from "../components/xp-column/xp-column.component";

export interface IXpColumn {
    caption: string | null;
    field: string | null;
}
export class XpColumn implements IXpColumn {
    caption: string | null = null;
    field: string | null = null;

    constructor(values?: IXpColumn) {
        if (values) {
            this.caption = values.caption;
            this.field = values.field;
        }

    }

}