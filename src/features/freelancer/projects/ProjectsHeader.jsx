import FilterDropDown from "../../../ui/FilterDropDown";
import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";

const sortOptions = [
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest",
  },
  {
    label: "مرتب سازی (جدید ترین)",
    value: "latest",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex flex-col lg:flex-row gap-y-8 items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div className="flex flex-col lg:flex-row w-full lg:w-auto items-center gap-8">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            { value: "ALL", label: "دسته بندی (همه)" },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
