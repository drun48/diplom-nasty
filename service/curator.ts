import { GET_LIST_CURATOR } from "@/query/curators/index";
import { useCuratorStore } from "@/store/curator";
import type { GET_LIST_CURATOR_DTO } from "~/query/curators/dto";
import nameFormat from "@/utils/nameFormat";

export async function getListCurator() {
  const { data } = await useAsyncQuery<GET_LIST_CURATOR_DTO>(GET_LIST_CURATOR, {
    fetchPolicy: "cache-and-network",
  });
  if (!data.value) return;
  useCuratorStore().list = data.value.getCurators.map((item) => ({
    ...item,
    name: nameFormat(item.first_name, item.second_name, item.last_name),
    district: item.district.name,
    role: item.role,
  }));
}
