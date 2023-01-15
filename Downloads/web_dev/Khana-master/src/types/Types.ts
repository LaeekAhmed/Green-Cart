export type OptionType = {
    header: string;
    offerings: string[];
    price: number,
    // ? indicates unknown value decided by
    count?: number;
    deliveryDate?: Date;
};

export type ProductOptions = {
    id: number;
    product_name: string;
    price: string;
    quantity: string;
    farmer: string;
    description: string;
}[];

export type CaterorOptions = { [arg: string]: OptionType[] };


