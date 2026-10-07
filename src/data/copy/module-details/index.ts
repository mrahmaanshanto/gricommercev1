import type { ModuleSlug } from "../modules";
import type { ModuleDetail } from "./types";
import { detail as analytics } from "./analytics";
import { detail as automation } from "./automation";
import { detail as cashAndExpenses } from "./cash-and-expenses";
import { detail as courier } from "./courier";
import { detail as customers } from "./customers";
import { detail as inventory } from "./inventory";
import { detail as offersLoyalty } from "./offers-loyalty";
import { detail as omnichannel } from "./omnichannel";
import { detail as orders } from "./orders";
import { detail as pos } from "./pos";
import { detail as salesChannels } from "./sales-channels";
import { detail as staffPermissions } from "./staff-permissions";
import { detail as storefront } from "./storefront";
import { detail as warehouse } from "./warehouse";

/** Module page details, by slug. A module without an entry keeps the simpler page. */
export const MODULE_DETAILS: Partial<Record<ModuleSlug, ModuleDetail>> = {
  "analytics": analytics,
  "automation": automation,
  "cash-and-expenses": cashAndExpenses,
  "courier": courier,
  "customers": customers,
  "inventory": inventory,
  "offers-loyalty": offersLoyalty,
  "omnichannel": omnichannel,
  "orders": orders,
  "pos": pos,
  "sales-channels": salesChannels,
  "staff-permissions": staffPermissions,
  "storefront": storefront,
  "warehouse": warehouse,
};

export type { ModuleDetail, Shot, Logo } from "./types";
