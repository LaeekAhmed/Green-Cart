export type OptionType = {
    header: string;
    offerings: string[];
    price: number,
    count?: number;
    deliveryDate?: Date;
};

export type CaterorOptions = { [arg: string]: OptionType[] };
