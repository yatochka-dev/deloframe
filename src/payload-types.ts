/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    'call-me': CallMe;
    parameters: Parameter;
    categories: Category;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'call-me': CallMeSelect<false> | CallMeSelect<true>;
    parameters: ParametersSelect<false> | ParametersSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    settings: Setting;
    calculatorSettings: CalculatorSetting;
    herosection: Herosection;
    calculator: Calculator;
  };
  globalsSelect: {
    settings: SettingsSelect<false> | SettingsSelect<true>;
    calculatorSettings: CalculatorSettingsSelect<false> | CalculatorSettingsSelect<true>;
    herosection: HerosectionSelect<false> | HerosectionSelect<true>;
    calculator: CalculatorSelect<false> | CalculatorSelect<true>;
  };
  locale: 'he' | 'ru';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "call-me".
 */
export interface CallMe {
  id: number;
  phone: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "parameters".
 */
export interface Parameter {
  id: number;
  name: string;
  category: number | Category;
  pricePer: number;
  weight: number;
  heatLoss: number;
  matrices: {
    amount: {
      oneStory: string;
      twoStory: string;
      oneStoryPF: string;
      twoStoryPF: string;
    };
    price: {
      oneStory: string;
      twoStory: string;
      oneStoryPF: string;
      twoStoryPF: string;
    };
    weight: {
      oneStory: string;
      twoStory: string;
      oneStoryPF: string;
      twoStoryPF: string;
    };
    heatLoss: {
      below9deg: {
        oneStory: string;
        twoStory: string;
        oneStoryPF: string;
        twoStoryPF: string;
      };
      below39deg: {
        oneStory: string;
        twoStory: string;
        oneStoryPF: string;
        twoStoryPF: string;
      };
    };
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: number;
  name: string;
  isMandatory: boolean;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'call-me';
        value: number | CallMe;
      } | null)
    | ({
        relationTo: 'parameters';
        value: number | Parameter;
      } | null)
    | ({
        relationTo: 'categories';
        value: number | Category;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  roles?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "call-me_select".
 */
export interface CallMeSelect<T extends boolean = true> {
  phone?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "parameters_select".
 */
export interface ParametersSelect<T extends boolean = true> {
  name?: T;
  category?: T;
  pricePer?: T;
  weight?: T;
  heatLoss?: T;
  matrices?:
    | T
    | {
        amount?:
          | T
          | {
              oneStory?: T;
              twoStory?: T;
              oneStoryPF?: T;
              twoStoryPF?: T;
            };
        price?:
          | T
          | {
              oneStory?: T;
              twoStory?: T;
              oneStoryPF?: T;
              twoStoryPF?: T;
            };
        weight?:
          | T
          | {
              oneStory?: T;
              twoStory?: T;
              oneStoryPF?: T;
              twoStoryPF?: T;
            };
        heatLoss?:
          | T
          | {
              below9deg?:
                | T
                | {
                    oneStory?: T;
                    twoStory?: T;
                    oneStoryPF?: T;
                    twoStoryPF?: T;
                  };
              below39deg?:
                | T
                | {
                    oneStory?: T;
                    twoStory?: T;
                    oneStoryPF?: T;
                    twoStoryPF?: T;
                  };
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  name?: T;
  isMandatory?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Setting {
  id: number;
  primaryGroup: string;
  homeLink: string;
  calculatorLink: string;
  secondaryGroup: string;
  languageSwitcher: string;
  themeSwitcher: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * Stores the formulas for the calculator
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "calculatorSettings".
 */
export interface CalculatorSetting {
  id: number;
  formulas: {
    buildingArea: {
      oneStory: string;
      twoStories: string;
    };
    usableArea: {
      oneStory: string;
      twoStories: string;
    };
    weight: string;
    weightOnTheFoundation: string;
    houseHeatLoss: string;
    recommendedMinHeatingPower: string;
    heatingCosts: string;
    cost: string;
    costPerSquareMeter: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "herosection".
 */
export interface Herosection {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "calculator".
 */
export interface Calculator {
  id: number;
  main: {
    inputs: {
      length: string;
      width: string;
      stories: {
        label: string;
        oneStory: string;
        twoStory: string;
        oneStoryPF: string;
        twoStoryPF: string;
      };
    };
    buttons: {
      advancedMode: string;
      reset: string;
    };
    output: {
      buildingArea: string;
      usableArea: string;
      buildingWeight: string;
      weightOnTheFoundation: string;
      heatLoss: string;
      minHeatingPower: string;
      heatingCosts: string;
      price: string;
      pricePerSq2: string;
    };
    buildingPolygon: {
      /**
       * $$ -- the width of the building in meters
       */
      width: string;
      /**
       * $$ -- the width of the building in meters
       */
      length: string;
      stories: {
        oneStory: string;
        twoStory: string;
      };
    };
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings_select".
 */
export interface SettingsSelect<T extends boolean = true> {
  primaryGroup?: T;
  homeLink?: T;
  calculatorLink?: T;
  secondaryGroup?: T;
  languageSwitcher?: T;
  themeSwitcher?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "calculatorSettings_select".
 */
export interface CalculatorSettingsSelect<T extends boolean = true> {
  formulas?:
    | T
    | {
        buildingArea?:
          | T
          | {
              oneStory?: T;
              twoStories?: T;
            };
        usableArea?:
          | T
          | {
              oneStory?: T;
              twoStories?: T;
            };
        weight?: T;
        weightOnTheFoundation?: T;
        houseHeatLoss?: T;
        recommendedMinHeatingPower?: T;
        heatingCosts?: T;
        cost?: T;
        costPerSquareMeter?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "herosection_select".
 */
export interface HerosectionSelect<T extends boolean = true> {
  title?: T;
  subtitle?: T;
  cta?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "calculator_select".
 */
export interface CalculatorSelect<T extends boolean = true> {
  main?:
    | T
    | {
        inputs?:
          | T
          | {
              length?: T;
              width?: T;
              stories?:
                | T
                | {
                    label?: T;
                    oneStory?: T;
                    twoStory?: T;
                    oneStoryPF?: T;
                    twoStoryPF?: T;
                  };
            };
        buttons?:
          | T
          | {
              advancedMode?: T;
              reset?: T;
            };
        output?:
          | T
          | {
              buildingArea?: T;
              usableArea?: T;
              buildingWeight?: T;
              weightOnTheFoundation?: T;
              heatLoss?: T;
              minHeatingPower?: T;
              heatingCosts?: T;
              price?: T;
              pricePerSq2?: T;
            };
        buildingPolygon?:
          | T
          | {
              width?: T;
              length?: T;
              stories?:
                | T
                | {
                    oneStory?: T;
                    twoStory?: T;
                  };
            };
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}