import {IconsEnum} from "../../../shared/enums/icons.enum";

export interface CreateGroupDto {
    title: string;
    description: string;
    icon: IconsEnum;
}
